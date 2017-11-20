import { IDerivation } from "./derivation";
export interface IAction {
    originalFn: Function;
    isMobxAction: boolean;
}
export declare function createAction(actionName: string, fn: Function): Function & IAction;
export declare function executeAction(actionName: string, fn: Function, scope?: any, args?: IArguments): any;
export interface IActionRunInfo {
    prevDerivation: IDerivation | null;
    prevAllowStateChanges: boolean;
    notifySpy: boolean;
    startTime: number;
}
export declare function startAction(actionName: string, fn: Function, scope: any, args?: IArguments): IActionRunInfo;
export declare function endAction(runInfo: IActionRunInfo): void;
export declare function useStrict(strict: boolean): void;
export declare function isStrictModeEnabled(): boolean;
export declare function allowStateChanges<T>(allowStateChanges: boolean, func: () => T): T;
export declare function allowStateChangesStart(allowStateChanges: boolean): boolean;
export declare function allowStateChangesEnd(prev: boolean): void;
