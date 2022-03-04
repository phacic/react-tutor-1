import React, { ReactNode, useState, useImperativeHandle, forwardRef, ForwardedRef, RefAttributes, Ref } from "react"

interface ToggleableFuncProps {
    toggleVisibility: () => void
}
export type ToggleableFuncs = ToggleableFuncProps | undefined

export interface TogglableProps {
    children?: ReactNode
    showLable: string
    hideLable: string
}
export const Togglable = forwardRef((props: TogglableProps, ref: Ref<ToggleableFuncs>) => {
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => setVisible(!visible)

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility,
        }
    })

    return (
        <div>

            {visible &&
                <div>
                    <button onClick={toggleVisibility}>{props.showLable}</button>
                </div>
            }

            {!visible &&
                <div>
                    {props.children}
                    <button className="px-4 py-1 mt-2" onClick={toggleVisibility}>{props.hideLable}</button>
                </div>
            }
        </div>
    )
})
