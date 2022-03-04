import React, { useEffect } from "react"
import { act } from "react-dom/test-utils"
import '@testing-library/jest-dom/'
import {render, screen, RenderResult, cleanup, } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from "./LoginForm"


// let loginRender: RenderResult
// let handleSubmitMock: jest.Mock<any, any>
// let cancelMock: jest.Mock<any, any>

beforeEach(() => {
    const handleSubmit = (data: {}) => console.log(data)
    const cancel = () => console.log('cancelled')

    // handleSubmitMock = jest.fn()
    // cancelMock = jest.fn()

    // act(() => {
    //     loginRender = render(<LoginForm cancel={cancel} handleSubmit={handleSubmitMock} />)
    // })

})

afterEach(() => {
    cleanup
})

describe('render content', () => {
    it("should render", () => {
       
        // const div = loginRender.container.querySelector('.login')

        // expect(div).toBeDefined()
        // expect(div).toHaveTextContent('Login')
    })
})

describe('click submit', () => {
    it('handler should be triggered', () => {
        
        // const submitMock = jest.fn()
        // const cancelMock = jest.fn()
        // let loginRender: RenderResult
        // act(() => {
        //     loginRender = render(<LoginForm cancel={cancelMock} handleSubmit={submitMock} />)
        // })

        // const button = screen.getByText("Submit")
        // userEvent.click(button)

        // expect(submitMock.mock.calls).toHaveLength(1)
    }) 
})