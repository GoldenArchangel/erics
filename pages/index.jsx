import { userService } from 'services';
import { Link } from 'components';


export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
              <li>
                <p>You&apos;re logged in!</p>
                <p><Link href="/users">Manage Profiles</Link></p>
                <p><Link href="/task">Manage tasks</Link></p>
                <p><Link href="/location">Check location</Link></p>
                </li>
            </div>
        </div>
    );
}
