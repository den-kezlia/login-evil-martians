import { FormEvent, useState, useEffect } from "react"

import Label from "@/app/components/label"
import Input from "@/app/components/input"
import Button from "@/app/components/button"
import FormElement from "@/app/components/form-element"
import TogglePassword from "@/app/components/toggle-password"

import styles from "./login.module.css"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isOnline, setIsOnline] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setPassword(e.target.value)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError(null)

        if (!isOnline) {
            setIsLoading(false)
            setError('You are offline. Please check your internet connection and try again.')
            return
        }

        try {
            if (!email || !password) {
                setError('Email and password are required')
                return
            }

            await new Promise(resolve => setTimeout(resolve, 1300))
        } catch (error) {
            console.error('Error logging in:', error)
            setError('Something went wrong on our end. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const update = () => setIsOnline(navigator.onLine)
        update()

        window.addEventListener('online', update)
        window.addEventListener('offline', update)

        return () => {
            window.removeEventListener('online', update)
            window.removeEventListener('offline', update)
        }
    }, [])

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
            aria-describedby={error ? "login-error" : undefined}
            aria-busy={isLoading}
        >
            <FormElement>
                <Label htmlFor="email">Email</Label>

                <Input
                    value={email}
                    onChange={handleEmailChange}
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                />
            </FormElement>

            <FormElement>
                <Label htmlFor="password">Password</Label>

                <Input
                    className={styles.passwordInput}
                    value={password}
                    onChange={handlePasswordChange}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    required
                    autoComplete="current-password"
                />

                <TogglePassword
                    showPassword={showPassword}
                    onToggle={() => setShowPassword(!showPassword)}
                />
            </FormElement>

            {error && (
                <p
                    className={styles.error}
                    role="alert"
                    aria-live="polite"
                    id="login-error"
                >
                    {error}
                </p>
            )}

            <Button
                disabled={isLoading}
                className={`${styles.button} ${styles.submitButton}`}
                type="submit"
            >
                {isLoading ? (
                    <span className={styles.loading}>
                        <span>
                            Logging in...
                        </span>

                        <img className={styles.loadingIcon} src="assets/loading.gif" alt="Loading" />
                    </span>
                ) : 'Log In'}
            </Button>
        </form>
    )
}