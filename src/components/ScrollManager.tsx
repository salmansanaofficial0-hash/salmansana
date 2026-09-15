import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 50);
      return () => window.clearTimeout(id);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
