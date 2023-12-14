import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>couldn't found requested page</p>
      <Link href="/">Return to Home</Link>
    </div>
  )
}