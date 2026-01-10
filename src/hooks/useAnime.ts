import { useEffect, useRef } from 'react';

export const useAnime = <T extends HTMLElement>(params: any) => {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    if (!ref.current) return;

    let animation: any;
    
    const initAnime = async () => {
        const animeModule: any = await import('animejs');
        const anime = animeModule.default || animeModule;
        animation = anime({
            targets: ref.current,
            ...params,
        });
    };

    initAnime();

    return () => {
      if (animation) animation.pause();
    };
  }, [params]);

  return ref;
};

export const useAnimeGroup = <T extends HTMLElement>(params: any) => {
     const ref = useRef<T>(null);
  
    useEffect(() => {
        if (!ref.current) return;
        
        let animation: any;

        const initAnime = async () => {
            const animeModule: any = await import('animejs');
            const anime = animeModule.default || animeModule;
            // Target children if they exist, or the element itself
            const targets = ref.current && ref.current.children.length > 0 
                ? ref.current.children 
                : ref.current;

            animation = anime({
                targets,
                ...params,
            });
        };

        initAnime();

        return () => {
            if (animation) animation.pause();
        };
    }, [params]);

    return ref;
}
