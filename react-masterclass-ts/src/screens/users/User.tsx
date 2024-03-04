import { useParams, Outlet, Link, useSearchParams } from 'react-router-dom'
import { users } from '../../db'
function User() {
  const { userId } = useParams()
  const [readSearchParmas, setSearchParmas] = useSearchParams()
  setTimeout(() => {
    setSearchParmas({
      day: 'today',
      tomorrow: `123`,
    })
  }, 3000)
  console.log(readSearchParmas.get('hello'))
  return (
    <div>
      <h1>
        User{userId} - {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">see follwers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  )
}
export default User
