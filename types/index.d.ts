export const OGVVersion: string;

declare class OGVCompatClass {
    supported(component: "OGVDecoder" | "OGVPlayer"): boolean;
}

export const OGVCompat: OGVCompatClass;

export class OGVPlayer {
}

export class OGVLoader {
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
