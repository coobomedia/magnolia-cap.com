"use client"

import { useToast } from "@/hooks/use-toast"
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import Map from "@/components/map"

const features = [
  {
    name: "Phone",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: PhoneIcon,
  },
  {
    name: "Email Address",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: EnvelopeIcon,
  },
  {
    name: "Address",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: BuildingOfficeIcon,
  },
]
type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const schema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  email: z.string().nonempty({ message: "Email is required" }).email(),
  phone: z.string().nonempty({ message: "Phone is required" }),
  message: z.string().nonempty({ message: "Message is required" }),
})

export default function ContactPage() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  // const watchAllFields = watch()

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      if (response.ok) {
        console.log("Form submitted successfully")

        toast({
          title: "Form submitted successfully!",
          description: "Thank you for your submission.",
          duration: 5000,
        })
        reset()
      } else {
        const responseData = await response.json()
        console.log("Form submission failed:", responseData)

        if (responseData.error) {
          toast({
            title: "Uh oh! Something went wrong.",
            description: responseData.error,
            duration: 5000,
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.log("Error submitting form:", error)
    }
  }
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto  max-w-7xl border-x pb-32">
        <div className="bg-white pb-10 pt-12 lg:pb-24 ">
          <div className="mx-auto  px-6 lg:px-16">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base  leading-7 text-magGray">
                Need More Information?
              </h2>
              <p className="mt-2 text-3xl font-light capitalize tracking-tight text-secondary ">
                Contact us directly or leave a message below and we&apos;ll get
                back to you ASAP
              </p>
            </div>
            <div className="mx-auto mt-10  sm:mt-20 lg:mt-24 ">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <PhoneIcon
                      className="h-5 w-5 flex-none text-secondary"
                      aria-hidden="true"
                    />
                    Phone
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-text">
                    <ul className="flex-auto">
                      <li>Andrew: 713.818.3300</li>
                      <li>Travis: 713.516.5833</li>
                    </ul>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <EnvelopeIcon
                      className="h-5 w-5 flex-none text-secondary"
                      aria-hidden="true"
                    />
                    Email
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-text">
                    <ul className="flex-auto">
                      <li>akollaer@magnolia-cap.com</li>
                      <li>tfrazier@magnolia-cap.com</li>
                    </ul>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <MapPinIcon
                      className="h-5 w-5 flex-none text-secondary"
                      aria-hidden="true"
                    />
                    Address
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-text">
                    <ul className="flex-auto">
                      <li>675 Bering Drive, Suite 140</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mx-auto grid   grid-cols-1  lg:grid-cols-3">
          <form
            className="col-span-2 border-y border-gray-200 p-6 lg:p-16 "
            onSubmit={handleFormSubmit(onSubmit)}
          >
            <div className="mx-auto  ">
              <h3 className=" mb-5 text-xl font-medium  text-secondary">
                Write Us And We&apos;ll Get Back To You
              </h3>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="">
                  <label
                    htmlFor="first-name"
                    className="block font-display text-xs font-medium leading-6 tracking-wider text-secondary"
                  >
                    First Name
                  </label>
                  <div className="relative mt-2  shadow-sm">
                    <input
                      type="text"
                      id="first-name"
                      {...register("firstName")}
                      className={cn(
                        "block w-full  border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                        {
                          "text-secondary  ring-magGray placeholder:text-text focus:ring-2  focus:ring-secondary ":
                            !errors["firstName"],
                          "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                            errors["firstName"],
                        }
                      )}
                      aria-invalid={errors.firstName ? "true" : "false"}
                      aria-describedby="first-name-error"
                    />
                  </div>

                  {errors["firstName"] && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="email-error"
                      role="alert"
                    >
                      {errors["firstName"].message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label
                    htmlFor="last-name"
                    className="block font-display text-xs font-medium leading-6 tracking-wider text-secondary"
                  >
                    Last Name
                  </label>
                  <div className="relative mt-2  shadow-sm">
                    <input
                      type="text"
                      id="last-name"
                      {...register("lastName")}
                      className={cn(
                        "block w-full  border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                        {
                          "text-secondary  ring-magGray placeholder:text-text focus:ring-2  focus:ring-secondary ":
                            !errors["lastName"],
                          "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                            errors["lastName"],
                        }
                      )}
                      aria-invalid={errors.lastName ? "true" : "false"}
                      aria-describedby="last-name-error"
                    />
                  </div>

                  {errors["lastName"] && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="email-error"
                      role="alert"
                    >
                      {errors["lastName"].message}
                    </p>
                  )}
                </div>

                <div className="">
                  <label
                    htmlFor="phone"
                    className="block font-display text-xs font-medium leading-6 tracking-wider text-secondary"
                  >
                    Phone
                  </label>
                  <div className="relative mt-2  shadow-sm">
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className={cn(
                        "block w-full  border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                        {
                          "text-secondary  ring-magGray placeholder:text-text focus:ring-2  focus:ring-secondary ":
                            !errors["phone"],
                          "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                            errors["phone"],
                        }
                      )}
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby="phone-error"
                    />
                  </div>

                  {errors["phone"] && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="phone-error"
                      role="alert"
                    >
                      {errors["phone"].message}
                    </p>
                  )}
                </div>

                <div className="">
                  <label
                    htmlFor="email"
                    className="block font-display text-xs font-medium leading-6 tracking-wider text-secondary"
                  >
                    Email
                  </label>
                  <div className="relative mt-2  shadow-sm">
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={cn(
                        "block w-full  border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                        {
                          "text-secondary  ring-magGray placeholder:text-text focus:ring-2  focus:ring-secondary ":
                            !errors["email"],
                          "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                            errors["email"],
                        }
                      )}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby="email-error"
                    />
                  </div>

                  {errors["email"] && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="email-error"
                      role="alert"
                    >
                      {errors["email"].message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block font-display text-xs font-medium leading-6 tracking-wider text-secondary"
                  >
                    Your Message
                  </label>
                  <div className="relative mt-2  ">
                    <textarea
                      aria-invalid={errors.message ? "true" : "false"}
                      {...register("message")}
                      rows={4}
                      name="message"
                      id="message"
                      className={cn(
                        "block w-full  border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                        {
                          "text-secondary  ring-magGray placeholder:text-text focus:ring-2  focus:ring-secondary ":
                            !errors["message"],
                          "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                            errors["message"],
                        }
                      )}
                      defaultValue={""}
                    />
                    {errors.message && (
                      <p role="alert" className="mt-2 text-sm text-red-600">
                        {errors.message?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  className="hover:bg-primary-900 focus-visible:outline-primary-900 flex items-center bg-secondary  px-10 py-4 text-center font-display  font-semibold tracking-widest text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      {"Sending"}
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </div>
          </form>
          <div className="relative pb-32">
            <Map />
            <div className="absolute bottom-0 h-32 w-32 bg-accent" />
          </div>
        </div>
      </div>
    </div>
  )
}
