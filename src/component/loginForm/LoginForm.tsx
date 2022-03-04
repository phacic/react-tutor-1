import React, { FormEventHandler } from "react";
import { useForm } from 'react-hook-form';

interface LoginFormProps {
    handleSubmit: (data: {}) => void;
    cancel: () => void
}
export const LoginForm = (props: LoginFormProps) => {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm()

    const onSubmit = (data: {}) => {
        props.handleSubmit(data)
    }
    
    const onReset = () => { 
        clearErrors()
        props.cancel()
    }

    return (
        <div className="w-1/2 login">
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
                <div className="flex flex-col space-y-3">

                    <div className="flex flex-col w-full gap-3">
                        <label className="flex flex-col" >
                            <input type="text" placeholder="enter username" {...register("username", {required: true})}/>
                            
                        </label>
                        <label className="flex flex-col" >
                            <input type="password" placeholder="enter password" {...register("password", {required: true})}/>
                        </label>
                    </div>

                    {Object.keys(errors).length > 0 && 
                        <div>
                            <span className="font-bold text-red-400">Username and password are required.</span>
                        </div>
                    }

                    <div className="flex flex-row gap-3">
                        <button type="submit" className="basis-1/2">Submit</button>
                        <button type="reset" className="basis-1/2">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}