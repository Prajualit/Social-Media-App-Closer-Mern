"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/assets/logo.png"
import Navsearch from '@/components/HomePg/Navsearch'
import UserButton from '@/components/HomePg/UserButton'
import { useSelector } from "react-redux";

const Navbar = () => {
    const userDetails = useSelector((state) => state.user.user);

    return (
        <div className='h-[70px] bg-neutral-100 shadow-md flex justify-between items-center px-10 '>
            <Link href='/'>
                <Image className='w-[100px] ' src={logo} alt="" />
            </Link>
            <Navsearch />
            <UserButton />
        </div>
    )
}

export default Navbar
