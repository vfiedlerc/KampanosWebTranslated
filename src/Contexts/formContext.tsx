import { AxiosResponse } from "axios";
import { useState } from "react";
import { createContext, ReactNode } from "react";
import { api } from "../service/index";
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';

// 
//Add the API USER value (check emailJS account config)
//
//init("USER_API");

interface FormContextData {
  sendFormData: () => Promise<Response>
  setFirstName: React.Dispatch<React.SetStateAction<string>>
  setLastName: React.Dispatch<React.SetStateAction<string>>
  setCompany: React.Dispatch<React.SetStateAction<string>>
  setProject: React.Dispatch<React.SetStateAction<string>>
  setBudget: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPhone: React.Dispatch<React.SetStateAction<string>>
  setPageNumber: React.Dispatch<React.SetStateAction<number | undefined>>
  firstName: string
  lastName: string
  company: string
  project: string
  budget: string
  email: string
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
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [project, setProject] = useState("")
  const [budget, setBudget] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [pageNumber, setPageNumber] = useState<number>()

  const [toSend, setToSend] = useState({
    from_name: email,
    to_name: '',
    message: {},
    reply_to: ''
  });

  // send data to api
  async function sendFormData() {
    const formData = [
      { name: "first_name", value: firstName },
      { name: "last_name", value: lastName },
      { name: "company", value: company },
      { name: "project", value: project },
      { name: "budget", value: budget },
      { name: "email", value: email },
      { name: "phone", value: phone }
    ];

    //
    // Set the email where the data will be sent (to_name:'sales@kampanos.pt')
    //
    setToSend(
      {
        ...toSend,
        from_name: email,
        //to_name: 'EMAIL_ENVIO_TESTE',
        message: [
          {'Name:': firstName},
          {'Email:': email},
          {'Phone:': phone},
          {'Company:': company},
          {'Budget:': budget},
          {'Project:': project}
        ],
        reply_to: ''
      }
    )

    return new Promise<any>(async (resolve, reject) => {
      try {
        console.log(formData);
        console.log(toSend);

        const response = formData
        resolve({response,formData})

        //
        // Send data to email throught emailJS
        //
        // send(
        //   'SERVICE ID',
        //   'TEMPLATE ID',
        //   toSend,
        //   'User ID'
        // )
        //   .then((response) => {
        //     console.log('SUCCESS!', response.status, response.text);
        //   })
        //   .catch((err) => {
        //     console.log('FAILED...', err);
        //   });


        // //To use after backend is configured
        // const response = await api.post('',formData)
        // resolve({response,formData})

      } catch (error) {
        reject(error);
      }
    });
  }

  return (
    <formContext.Provider
      value={{
        sendFormData,
        setFirstName,
        setLastName,
        setCompany,
        setProject,
        setBudget,
        setEmail,
        setPhone,
        setPageNumber,
        pageNumber,
        firstName,
        lastName,
        company,
        project,
        budget,
        email,
        phone
      }}>
      {children}
    </formContext.Provider>
  )
}