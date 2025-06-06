import React from 'react'
import UserAvatar from '../ui/UserAvatar'
import { apiError } from '@/backend/utils/apiError'
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import Image from 'next/image';

const UserButton = () => {


    const router = useRouter();
    const handleLogout = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/users/logout`, {
                method: "POST",
                credentials: "include",
            });

            const data = await response.json();
            console.log("Data:", data);

            if (data.success) {
                router.push("/sign-in");
            } else {
                apiError(401, data.error);
            }
        } catch (error) {
            console.error("Error during logout:", error.message);
        }
    };

    const userDetails = useSelector((state) => state.user.user);
    return (
        <button
            onClick={handleLogout}
            className='hover:bg-[#efefef] transition-colors duration-300 rounded-[8px] flex space-x-2 w-full items-center px-4 py-2'>
            {userDetails ? <Image width={32} height={32} className='rounded-full' src={userDetails.avatarUrl} alt="" /> : <UserAvatar />}
            <span>{userDetails.name.split(" ")[0]}</span>
        </button>
    )
}

export default UserButton
