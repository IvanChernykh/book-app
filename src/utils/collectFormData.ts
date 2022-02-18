import { UseFormGetValues } from "react-hook-form";

export const collectFormData = (values: string[], getValues: UseFormGetValues<any>) => {

    return Object.fromEntries(values.map(val => [val, getValues(val)]))
}