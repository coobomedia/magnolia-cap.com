interface MailToLinkProps {
  email: string
  subject: string
  body: string
  children: React.ReactNode
}

const MailToLink: React.FC<MailToLinkProps> = ({
  email,
  subject,
  body,
  children,
}) => {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`

  return <a href={mailtoUrl}>{children}</a>
}

export default MailToLink
