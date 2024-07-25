"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Download, Loader2, StarsIcon } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import potrace from 'potrace';
import { toast } from "sonner";

const HeroPrompt = () => {
  const [showResultPage, setShowResultPage] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [textPrompt, setTextPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState('');
  const [svg, setSvg] = useState<string | null>(null);

  const generateSvg = async () => {
    // call the api to generate SVG
    if (textPrompt.length === 0) {
      toast("No Input", {
        description: 'Looks like there is no input prompt added',
      })
      return;
    }
    

    try {
      setLoading(true);
      const response = await axios.post("/api/generatesvg", {
        messages: textPrompt,
      });    
      if (response.status === 200 || response.statusText === "OK") {
        setImageUrl(response.data);
        setLoading(false);
        setShowResultPage(true);
  
        potrace.trace(response.data, (err, svg) => {
          if (err) {
            console.error('Error converting JPEG to SVG:', err);
          } else {          
            setSvg(svg);
          }
        });
      } else {
        setLoading(false);
        toast.error("Oops! Something went wrong", {
          description: "Looks like something went wrong",
          action: {
            label: "Retry",
            onClick: generateSvg,
          },
        })
      }
    } catch (error) {
      setLoading(false);
      toast.error("Oops! Something went wrong", {
        description: "Looks like something went wrong",
        action: {
          label: "Retry",
          onClick: generateSvg,
        },
      })
    }
  };

  const downloadSVG = () => {
    // download the svg file
    if (svg) {
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      // Create a temporary link element and trigger a click on it
      const link = document.createElement('a');
      link.href = url;
      const timestamp = + new Date();
      link.download = `image-${timestamp}.svg`;
      document.body.appendChild(link);
      link.click();

      // Cleanup: remove the temporary link and revoke the object URL
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const showPromptPage = () => {
    setShowResultPage(false);
    setLoading(false);
    setTextPrompt('');
    setSvg('');
  };

  const updateTextPrompt = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setTextPrompt(event.target.value);
  }

  return (
    <div className="w-full lg:max-w-full lg:flex px-4 py-2 md:px-24 md:py-12">
      <div className="lg:h-auto w-full flex flex-col gap-8 text-white items-center bg-[#222222] shadow-xl rounded-2xl">
        {/* Input Section */}
        {!showResultPage && (
          <div className="mx-5 my-10 flex flex-col gap-8 items-center md:w-[60%]">
            <h3 className="text-2xl md:text-3xl font-semibold text-center">
              Sprinkle AI magic on visuals!
            </h3>
            <div className="flex flex-col gap-3 items-center">
              <Input
                className="h-12 focus:border-none focus-visible:border-none text-black"
                type="text"
                placeholder="Prompt in, SVG out! Let AI work its magic..."
                onChange={updateTextPrompt}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    generateSvg();
                  }}
              />
              <p className="text-xs text-center">
                Enter your text prompt, such as &apos;wolf&apos;, and see it
                magically turn into an SVG image.
              </p>
            </div>
            <div>
              <div>
                {!isLoading && (
                  <Button disabled={textPrompt.length === 0} onClick={generateSvg} variant="white" size="lg">
                    Generate
                    <StarsIcon className="w-4 h-4 ml-2" />
                  </Button>
                )}
                {isLoading && (
                  <Button disabled variant="white" size="lg">
                    Generating
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Result section */}
        {showResultPage && (
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 px-5 my-5 md:px-10 md:my-10 w-full">
            <div className="w-full h-[300px] md:w-[50%] md:h-[450px] bg-white rounded-2xl relative">
              <Image src={imageUrl} fill className="grayscale rounded-2xl" alt="generated svg" />
            </div>
            <div className="md:w-[50%] flex flex-col gap-5 items-center justify-center text-center">
              <h3 className="text-2xl md:text-4xl font-semibold">Your SVG is ready to roll!</h3>
              <p className="text-sm">
                Grab your SVG icon! Not thrilled? No worries—give it another whirl for a fresh and fabulous creation!
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button onClick={downloadSVG} variant="white" size="lg">
                  Download SVG
                  <Download className="ml-2 w-4 h-4" />
                </Button>
                <Button onClick={showPromptPage} variant="pink" size="lg">
                  Generate new SVG
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroPrompt;
