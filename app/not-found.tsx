import Link from "next/link";

export default function NotFound() {
  return (
    <div className="d-flex container h-100 w-100 align-items-center justify-content-center">
     <div className="col-12">
     <div className="card card-body w-80">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
     </div>
    </div>
  );
}
