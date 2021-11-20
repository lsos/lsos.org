import React, { useRef, useEffect } from 'react'
import { useStateObject } from '../../utils/useStateObject'
import './LoginPage.css'

/*
import { server, context as context_ } from "telefunc/client";
import { UserTelefuncs } from "../users.telefuncs";
import { Context } from "../Context";
const userTelefuncs = server as UserTelefuncs;
const context = context_ as Context;
*/

import { assert } from '@brillout/assert'
import { SomethingWentWrong } from '../../utils/SomethingWentWrong'
import { P } from '../../utils/P'

export { LoginPage }

type FormTextInputs = {
  email: string
  password: string
}
type FormState = FormTextInputs & {
  wrongCredentials: true | null
  somethingWentWrong: boolean
}

const initState = {
  email: '',
  password: '',
  wrongCredentials: null,
  somethingWentWrong: false
}

function LoginPage() {
  const formState = useStateObject<FormState>(initState)

  const hideError = () => {
    formState.wrongCredentials = initState.wrongCredentials
    formState.somethingWentWrong = initState.somethingWentWrong
  }

  return (
    <form id="login-form" className="lsos-form gray-block" onSubmit={onSubmit}>
      <fieldset>
        <h1>Sign In</h1>
        <P>
          <Input formState={formState} formKey={'email'} label={'E-mail'} autoFocus={true} onChange={hideError} />
        </P>
        <P>
          <Input formState={formState} formKey={'password'} label={'Password'} isPassword={true} onChange={hideError} />
        </P>
        <P>
          <span style={{ display: 'block', height: 13 }} />
          <button className="lsos-button" type="submit" style={{ width: '100%' }}>
            Sign In
          </button>
        </P>
        <ErrorView formState={formState} />
      </fieldset>
    </form>
  )

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()

    let wrongCredentials: null | boolean = null
    let somethingWentWrong: boolean = false

    formState.wrongCredentials = wrongCredentials
    formState.somethingWentWrong = somethingWentWrong

    let success
    try {
      /*
      const ret = await userTelefuncs.login(
        formState["email"],
        formState["password"]
      );
      success = ret.success;
      wrongCredentials = ret.wrongCredentials;
      */
      wrongCredentials = true
    } catch (err) {
      somethingWentWrong = true
    }
    assert(somethingWentWrong || wrongCredentials || success)

    formState.wrongCredentials = wrongCredentials
    formState.somethingWentWrong = somethingWentWrong

    if (success) {
      //assert(context.loggedUser);
      window.location.reload()
    }
  }
}

function ErrorView({ formState }: { formState: FormState }) {
  if (formState.wrongCredentials) {
    return <P className="text-red">Wrong credentials.</P>
  }

  if (formState.somethingWentWrong) {
    return <SomethingWentWrong />
  }

  return null
}

function Input({
  formState,
  formKey,
  label,
  isPassword,
  autoFocus,
  onChange
}: {
  formState: FormState
  formKey: keyof FormTextInputs
  label: string
  isPassword?: true
  autoFocus?: true
  onChange: () => void
}) {
  const inputEl = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    inputEl.current!.focus()
  }
  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        focusInput()
      }, 0)
    }
  }, [])

  return (
    <label>
      <div className="input-label">{label}</div>
      <input
        ref={inputEl}
        style={{ width: '100%' }}
        type={isPassword ? 'password' : 'text'}
        value={formState[formKey]}
        onChange={(ev) => {
          formState[formKey] = ev.target.value
          onChange()
        }}
      />
    </label>
  )
}
