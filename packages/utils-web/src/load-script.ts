export default function loadScript (
  url: string,
  returnScript?: (script: HTMLScriptElement) => void
): Promise<HTMLScriptElement> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    const destroy = () => {
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onError);
    };
    const onLoad = () => {
      destroy();
      resolve(script);
    };
    const onError = (err: any) => {
      destroy();
      document.body.removeChild(script);
      reject(err || new Error(`load script error: ${url}`));
    };

    script.src = url;
    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);
    document.body.appendChild(script);
    returnScript && returnScript(script);
  });
}