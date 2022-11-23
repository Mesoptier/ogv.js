export const OGVVersion: string;

declare class OGVCompatClass {
    supported(component: "OGVDecoder" | "OGVPlayer"): boolean;
}

export const OGVCompat: OGVCompatClass;

declare class OGVJSElement extends HTMLElement {}

interface OGVPlayerOptions {
    base?: string;
    worker?: unknown;
    webGL?: unknown;
    forceWebGL?: unknown;
    stream?: unknown;

    audioContext?: AudioContext;
    audioDestination?: AudioNode;
    audioBackendFactory?: unknown;

    // Experimental pthreads multithreading mode, if built.
    threading?: unknown;
    // Experimental SIMD mode, if built.
    simd?: unknown;

    debug?: boolean;
    debugFilter?: RegExp;
}

declare class OGVPlayer extends OGVJSElement {
    constructor(options: OGVPlayerOptions);

    src: string;
    readonly buffered: OGVTimeRanges;
    readonly seekable: OGVTimeRanges;
    currentTime: number;
    readonly duration: number;
    readonly paused: boolean;
    readonly ended: boolean;
    readonly seeking: boolean;
    muted: boolean;
    poster: string;
    readonly videoWidth: number;
    readonly ogvjsVideoFrameRate: number;
    readonly ogvjsAudioChannels: number;
    readonly ogvjsAudioSampleRate: number;
    width: number;
    height: number;
    autoplay: boolean;
    controls: boolean;
    loop: boolean;
    crossOrigin: string | null;
    readonly currentSrc: string | null;
    readonly defaultMuted: boolean;
    readonly defaultPlaybackRate: number;
    readonly error: OGVMediaError | null;
    preload: string;
    readonly readyState: number;
    readonly networkState: number;
    playbackRate: number;
    readonly played: OGVTimeRanges;
    volume: number;

    load(): void;
    canPlayType(type: string): '' | 'probably' | 'maybe';
    play(): void;
    pause(): void;
    fastSeek(time: number): void;
}

export class OGVLoader {
    base: string;
    // TODO: Are the other methods on this class public?
}

declare enum OGVMediaErrorCode {
    MEDIA_ERR_ABORTED = 1,
    MEDIA_ERR_NETWORK = 2,
    MEDIA_ERR_DECODE = 3,
    MEDIA_ERR_SRC_NOT_SUPPORTED = 4,
}

// TODO: The call sites of this class need to be fixed, because in one case this
//  class is constructed as follows: `new OGVMediaError("...")`
export class OGVMediaError {
    code: OGVMediaErrorCode | string;
    message?: string;

    constructor(code: OGVMediaErrorCode, message: string);
    constructor(code: string);

    // TODO: Does it really make sense to expose these constants on OGVMediaError
    //  and OGVMediaError.prototype? Shouldn't the enum itself just be exported?

    MEDIA_ERR_ABORTED: OGVMediaErrorCode.MEDIA_ERR_ABORTED;
    MEDIA_ERR_NETWORK: OGVMediaErrorCode.MEDIA_ERR_NETWORK;
    MEDIA_ERR_DECODE: OGVMediaErrorCode.MEDIA_ERR_DECODE;
    MEDIA_ERR_SRC_NOT_SUPPORTED: OGVMediaErrorCode.MEDIA_ERR_SRC_NOT_SUPPORTED;

    static MEDIA_ERR_ABORTED: OGVMediaErrorCode.MEDIA_ERR_ABORTED;
    static MEDIA_ERR_NETWORK: OGVMediaErrorCode.MEDIA_ERR_NETWORK;
    static MEDIA_ERR_DECODE: OGVMediaErrorCode.MEDIA_ERR_DECODE;
    static MEDIA_ERR_SRC_NOT_SUPPORTED: OGVMediaErrorCode.MEDIA_ERR_SRC_NOT_SUPPORTED;
}

export class OGVMediaType {
    major: string | null;
    minor: string | null;
    codecs: string[] | null;

    constructor(contentType: string);
}

export class OGVTimeRanges implements TimeRanges {
    readonly length: number;

    end(index: number): number;

    start(index: number): number;
}
