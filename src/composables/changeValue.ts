export function useChangeValue(block: { value: any; childrens?: any; verified?: any; completed?: any; }, value: string) {
    block.value = value;
    block.verified = true;
    block.completed = value === "" ? false : true;
}