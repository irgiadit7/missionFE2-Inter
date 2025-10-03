import { useLogin } from "../hooks/useLogin";

const ProfilePages = () => {
    const username = useLogin();
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
            user : {username}
            <p>This is the profile page.</p>
        </div>
    );
}

    export default ProfilePages;