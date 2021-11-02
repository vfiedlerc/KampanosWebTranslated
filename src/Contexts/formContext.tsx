import { AxiosResponse } from "axios";
import { useState } from "react";
import { createContext, ReactNode } from "react";
import { api } from "../service/index";

interface FormContextData {
  sendFormData:  () => Promise<Response>
  setFirstName: React.Dispatch<React.SetStateAction<string>>
  setName: React.Dispatch<React.SetStateAction<string>>  
  setCompany: React.Dispatch<React.SetStateAction<string>>
  setProject: React.Dispatch<React.SetStateAction<string>>
  setBudget: React.Dispatch<React.SetStateAction<string>>
  setContactMail: React.Dispatch<React.SetStateAction<string>>
  setPhone: React.Dispatch<React.SetStateAction<string>>
  setPageNumber: React.Dispatch<React.SetStateAction<number | undefined>>
  firstName: string
  name: string
  company: string
  project: string
  budget: string
  contactMail: string
  phone: string
  pageNumber: number | undefined
}

type Response = {
  response: AxiosResponse<any>
  formData: any
}

interface FormProviderProps {
  children: ReactNode;
}

export const formContext = createContext({} as FormContextData)

export function FormProvider({ children }: FormProviderProps) {
  // form fields
  const [firstName, setFirstName] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [project, setProject] = useState("")
  const [budget, setBudget] = useState("")
  const [contactMail, setContactMail] = useState("")
  const [phone, setPhone] = useState("")

  const [pageNumber, setPageNumber] = useState<number>()

  // send data to api
  const sendFormData = async () => {
    const formData = [
      { name: "first_name", value: firstName },
      { name: "name", value: name },     
      { name: "company", value: company },
      { name: "project", value: project },
      { name: "budget", value: budget },
      { name: "contact_mail", value: contactMail },
      { name: "phone", value: phone }
    ]

    return new Promise<Response>(async(resolve, reject) => {
      try {      
        const response = await api.post('',formData)
        resolve({response,formData})
      } catch (error) {
        reject(error)
      }
    })    
  }

  return (
    <formContext.Provider
      value={{
        sendFormData,        
        setFirstName,
        setName,
        setCompany,
        setProject,
        setBudget,
        setContactMail,
        setPhone,
        setPageNumber,       
        pageNumber,
        firstName,
        name,
        company,
        project,
        budget,
        contactMail,       
        phone
      }}>
      {children}
    </formContext.Provider>
  )

}