'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import NewNote from '../components/Link';

export default function Nav() {
  const pathName = usePathname();
  return (
    <>
      <div className="navbar mb-5 border-b-2 border-slate-800 bg-base-100">
        <div className="flex-1">
          <Link
            href="/"
            className={clsx('btn btn-ghost text-xl', {
              'border-transparent outline outline-slate-200': pathName === '/',
            })}
          >
            Notes
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NewNote />
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx('', {
                  'text-primary': pathName === '/contact',
                })}
              >
                Contact
              </Link>
            </li>
            <li>
              <details>
                <summary>Member Area</summary>
                <ul className="z-30 rounded-t-none bg-base-100 p-2">
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/sign-up">SignUp</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
