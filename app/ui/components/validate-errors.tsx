export interface IValidateErrors { 
    errors?: any[]
 }

export const ValidateErrors = (props: IValidateErrors) => {
    return (
        <div id="customer-error" aria-live="polite" aria-atomic="true">
            {props.errors &&
                props.errors.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                ))}
        </div>
    )
}