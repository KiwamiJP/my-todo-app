import AddToDoForm from "./AddToDoForm.tsx";
import Button from "./Button.tsx";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
export default function SideBar() {
    const { login, register,isAuthenticated,user,logout } = useKindeAuth();

    return (

        <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[35px] pb-[35px]">
            <AddToDoForm    />
            {isAuthenticated ? (
                <div className='mt-auto space-y-2'>
                    <div>Logged in as {user?.given_name}

                    </div>
                    <Button onClick={logout} type="secondary">Logout</Button>
                </div>
            ) : (
                <div className='mt-auto space-y-2'>
                    <Button onClick={login} type='secondary'>Log in</Button>
                    <Button onClick={register} type='secondary'>Register</Button>
                </div>
            )}

        </section>
    )
}