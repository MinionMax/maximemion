import Link from 'next/link';
import { getWords } from '../../lib/posts';
import Index from '../components/posts';

export default function Home() {
  console.log(getWords())
  return (
    <div>
     Home
    </div>
  )
}
