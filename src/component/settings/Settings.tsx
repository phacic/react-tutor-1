import React, { ChangeEvent, useCallback, useEffect, useState } from "react";


export enum SysThemeOptions {
    LIGHT = "LIGHT",
    DARK = "DARK",
}
export enum AppThemeOptions {
    SYSTEM = "SYSTEM",
    LIGHT = "LIGHT",
    DARK = "DARK",
}

export interface SettingsProps {
    // onThemeChoiceChange: (e: ChangeEvent<HTMLInputElement>) => void,
    // theme: AppThemeOptions,
}
export const Settings = (props: SettingsProps) => {

    // save the system theme on start
    // so setting to system theme is straight forward
    const [systemTheme, setSystemTheme] = useState<SysThemeOptions>(SysThemeOptions.LIGHT)

    // selected app theme
    const [appTheme, setAppTheme] = useState<AppThemeOptions>(AppThemeOptions.LIGHT)

    /**
   * check system theme and save the value
   */
    const checkSysDarkTheme = () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('system theme', SysThemeOptions.DARK)
            setSystemTheme(SysThemeOptions.DARK)
        } else {
            console.log('system theme', SysThemeOptions.DARK)
            setSystemTheme(SysThemeOptions.LIGHT)
        }
        console.log(systemTheme)
    }


    /**
     * listen to system theme changes
     */
    const onSysDarkThemeChange = () => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e: MediaQueryListEvent) => {
            console.log("system dark theme changed")
            // save the current value
            checkSysDarkTheme()

            // update app theme if necessary
            if (appTheme === AppThemeOptions.SYSTEM) {
                // console.log('updating to match system theme')
                setToSystemTheme()
            }
        })
    }


    /**
     * set to either light or dark theme
     * @param dark boolean, whether dark theme or not
     */
    const setDarkTheme = (dark: boolean = true) => {
        // console.log("setting new theme. dark =", dark)
        if (dark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    /**
     * set app theme to match system
     */
    const setToSystemTheme = () => {
        setDarkTheme(systemTheme === SysThemeOptions.DARK)
    }

    const onThemeChoiceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAppTheme(e.target.value as AppThemeOptions)

        switch (e.target.value) {
            case (AppThemeOptions.LIGHT):
                setDarkTheme(false)
                break;
            case (AppThemeOptions.DARK):
                setDarkTheme(true)
                break;
            default:
                setToSystemTheme()
                break;
        }
    }

    return (
        <div>
            <form>
                <div>
                    <h4>Dark Theme</h4>
                    <div className="flex justify-start space-x-6 align-center">
                        {/* <div>
                            <label className="radio-label">
                                <input type="radio" name="darkOptions" value={AppThemeOptions.SYSTEM} onChange={props.onThemeChoiceChange}/>
                                <span>System</span>
                            </label>
                        </div> */}
                        <div>
                            <label className="radio-label">
                                <input type="radio"
                                    name="darkOptions"
                                    value={AppThemeOptions.LIGHT}
                                    onChange={onThemeChoiceChange}
                                    checked={appTheme === AppThemeOptions.LIGHT}
                                />
                                <span>Light</span>
                            </label>
                        </div>
                        <div>
                            <label className="radio-label">
                                <input type="radio"
                                    name="darkOptions"
                                    value={AppThemeOptions.DARK}
                                    onChange={onThemeChoiceChange}
                                    checked={appTheme === AppThemeOptions.DARK}
                                />
                                <span>Dark</span>
                            </label>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}