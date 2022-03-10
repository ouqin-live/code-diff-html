
declare interface IConfig {
    fileName?: string
    oldObj: object
    newObj: object
    domId: string
    options?: object
  }

export declare function drawDiff (config?: IConfig):null 