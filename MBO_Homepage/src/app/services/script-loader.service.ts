import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScriptLoaderService {
    private loadedScripts: { [src: string]: Promise<void> | undefined } = {};

    loadScript(src: string, type: string = 'text/javascript'): Promise<void> {
        const existing = this.loadedScripts[src];
        if (existing) {
            return existing;
        }

        const promise = new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.type = type;
            script.src = src;
            script.async = true;

            script.onload = () => {
                resolve();
            };

            script.onerror = (error) => {
                reject(error);
            };

            document.body.appendChild(script);
        });

        this.loadedScripts[src] = promise;
        return promise;
    }
}
