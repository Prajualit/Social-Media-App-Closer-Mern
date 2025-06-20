import React from 'react'
import { useSelector } from 'react-redux'
import Image from "next/image";
import EditProfile from "@/components/Modal/editProfile.modal";

const Userdata = () => {
    const userDetails = useSelector((state) => state.user.user);

    return (
        <div>
            <div className="flex items-center justify-center w-full space-x-32 ">
                <Image height={250} width={250} className="rounded-full" src={userDetails.avatarUrl} alt="" />
                <div className="flex flex-col space-y-3 items-start ">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className=" text-neutral-500">{userDetails.username}
                        </h1>
                        <h1 className="text-[32px] ">{userDetails.name}</h1>
                        <p className="italic text-neutral-500 ">{userDetails.bio}</p>
                    </div>
                    <EditProfile />
                </div>
            </div>
        </div>
    )
}

export default Userdata
