import React, {Suspense,useState, useRef, useEffect} from 'react';
import {Spin, Popover, Space} from 'antd';
import { Link}from 'react-router-dom'

import {LoadingOutlined} from '@ant-design/icons';
import {FaFacebook} from "react-icons/fa"
import Messenger from './PopupHeader/Messenger/Messenger';
import Notification from './PopupHeader/Notification/Notification';
import Menu from "./PopupHeader/Menu/Menu"
import Acc from './PopupHeader/Acc/Acc';
import Input from '../Input/Input';

export type PropsLayout = {children: React.ReactNode;};
const Header = ({children}: any) => {
const antIcon = < LoadingOutlined style={ { fontSize: 100 } } spin /> ;

const [activePage , setActivePage ]=useState("Home")

return (
<div className='sticky'>
    <header className="bg-[#ffffff] flex justify-between h-[56px] items-center w-[100%] m-[auto] shadow-lg">
        <div className='flex relative ml-[16px]'>
            <ul className='flex'>
                <li className='mr-[10px]'>
                    <Link to="">
                        <FaFacebook className='text-[40px] text-[#0c87ef]' />
                    </Link>
                </li>
                <li className='flex items-center'>
                    <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                        className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od absolute left-[62px] text-[16px]">
                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                            <g fill-rule="nonzero">
                                <path
                                    d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                    transform="translate(448 544)"></path>
                            </g>
                        </g>
                    </svg>
                    <input className="w-[240px] rounded-[20px] h-[40px] pl-[35px] bg-[#f0f2f5] focus:outline-none" type="text"
                        placeholder="Tìm kiếm trên Facebook" />
                </li>
            </ul>
        </div>
        <div className='flex'>
            <ul className='flex '>
                <li onClick={()=> setActivePage("Home")}
                    className={`flex w-[100px] h-[56px] justify-center items-center hover:bg-[#f2f2f2] rounded-[10px] cursor-pointer relative `}>
                    <Link to="/" >
                        {
                            activePage === "Home" 
                            ?
                        
                            <svg viewBox="0 0 28 28"
                                className="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt text-[#1b74e4]"
                                fill="currentColor" height="28" width="28">
                                <path
                                    d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29">
                                </path>
                            </svg>
                            :
                            <svg viewBox="0 0 28 28" className={`x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6
                                text-[#65676b] `} fill="currentColor" height="28" width="28">
                                <path
                                    d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z">
                                </path>
                            </svg>
                        }
                        { activePage ==="Home" &&  <hr className='absolute h-[3px] w-full bottom-0 left-0 bg-[#1b74e4] ' ></hr>}      
                    </Link>
                    
                </li>
                <li onClick={()=> setActivePage("Videos")}
                    className='flex w-[100px] h-[56px] justify-center items-center hover:bg-[#f2f2f2] rounded-[10px] cursor-pointer relative'>
                    <Link to="">
                        {
                            activePage === "Videos"
                            ?
                            <svg viewBox="0 0 28 28" className="text-[#1b74e4] x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path></svg>
                            :
                            <svg viewBox="0 0 28 28" className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 text-[#65676b]"
                            fill="currentColor" height="28" width="28">
                            <path
                                d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z">
                            </path>
                        </svg>
                            
                            
                        }
                         { activePage === "Videos" &&  <hr className='absolute h-[3px] w-full bottom-0 left-0 bg-[#1b74e4] ' ></hr>}
                      
                    </Link>
                </li>
                <li onClick={()=> setActivePage("Maketplace")}
                    className='flex w-[100px] h-[56px] justify-center items-center hover:bg-[#f2f2f2] rounded-[10px] cursor-pointer relative '>
                    <Link to="">
                        {
                            activePage === "Maketplace"
                            ?
                            <svg viewBox="0 0 28 28" className="x1lliihq text-[#1b74e4] x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="m10.995,23.625l0,-5.8c0,-0.526 0.424,-0.95 0.95,-0.95l4.09,0c0.526,0 0.95,0.424 0.95,0.95l0,5.8l4.98,0c0.43,0 0.78,-0.348 0.78,-0.78l0,-8.264c-0.124,-0.073 -0.242,-0.159 -0.35,-0.256l-0.41,-0.37c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.17,0.15c-0.55,0.49 -1.25,0.76 -1.97,0.76l-0.23,0c-0.71,0 -1.41,-0.26 -1.96,-0.75l-0.19,-0.17c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.19,0.17c-0.55,0.49 -1.25,0.76 -1.96,0.76l-0.14,0c-0.71,0 -1.4,-0.26 -1.94,-0.74l-0.22,-0.19c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.18,0.16c-0.55,0.49 -1.25,0.76 -1.97,0.76l-0.18,0c-0.72,0 -1.41,-0.26 -1.96,-0.75l-0.2,-0.17c-0.18,-0.17 -0.44,-0.17 -0.63,0l-0.48,0.43c-0.076,0.067 -0.156,0.129 -0.24,0.183l0,8.287c0,0.43 0.348,0.78 0.78,0.78l4.96,0zm13.25,-8.795l0,8.015c0,1.262 -1.023,2.28 -2.28,2.28l-15.93,0c-1.262,0 -2.28,-1.023 -2.28,-2.28l0,-7.989c-0.993,-0.139 -1.76,-1.038 -1.76,-2.131l0,-2.35c0,-0.28 0.22,-0.5 0.5,-0.5l23.01,0c0.28,0 0.5,0.22 0.5,0.5l0,2.18c0,1.124 -0.756,2.063 -1.76,2.275zm0.71,-5.955l-21.93,0c-0.35,0 -0.59,-0.36 -0.46,-0.69l1.82,-4.49c0.19,-0.49 0.65,-0.82 1.17,-0.82l16.87,0c0.52,0 0.98,0.33 1.17,0.83l1.82,4.48c0.14,0.33 -0.11,0.69 -0.46,0.69z"></path></svg>
                            :
                            <svg viewBox="0 0 28 28" className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 text-[#65676b]"
                            fill="currentColor" height="28" width="28">
                            <path
                                d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z">
                            </path>
                        </svg>
                        }
                       {
                        activePage === "Maketplace" &&  <hr className='absolute h-[3px] w-full bottom-0 left-0 bg-[#1b74e4] ' ></hr>
                       }
                       
                    </Link>
                </li>
                <li onClick={()=> setActivePage("Group")}
                    className='flex w-[100px] h-[56px] justify-center items-center hover:bg-[#f2f2f2] rounded-[10px] cursor-pointer relative'>
                    <Link to="">
                        {
                              activePage === "Group"
                              ?
                              <svg viewBox="0 0 28 28"
                                  className="text-[#1b74e4] x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt"
                                  fill="currentColor" height="28" width="28">
                                  <path
                                      d="M21.877 19 21.364 19C21.139 19 20.971 18.802 20.996 18.577 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.066 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.877 19ZM17.75 10.75C17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13 18.647 13 17.75 11.991 17.75 10.75ZM19.5 18.221C19.5 19.202 18.682 20 17.678 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.442 13.5 12.828 13.5L15.173 13.5C17.559 13.5 19.5 15.395 19.5 17.724L19.5 18.221ZM6.25 10.75C6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13 7.147 13 6.25 11.991 6.25 10.75ZM7.934 14.591C7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.991 18.461 7.004 18.577 7.03 18.802 6.861 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14L7.631 14C7.933 14 8.102 14.338 7.934 14.591ZM14 6C15.697 6 16.75 7.15 16.75 9 16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6ZM14 1C6.832 1 1 6.832 1 14 1 21.169 6.832 27 14 27 21.169 27 27 21.169 27 14 27 6.832 21.169 1 14 1Z">
                                  </path>
                              </svg>
                              :
                              <svg viewBox="0 0 28 28" className=" text-[#65676b] x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6"
                              fill="currentColor" height="28" width="28">
                              <path
                                  d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z">
                              </path>
                          </svg>

                        }
                      
                        {
                        activePage === "Group" &&  <hr className='absolute h-[3px] w-full bottom-0 left-0 bg-[#1b74e4] ' ></hr>
                       }
                    </Link>
                </li>
                <li onClick={()=> setActivePage("PlayGame")}
                    className='flex w-[100px] h-[56px] justify-center items-center hover:bg-[#f2f2f2] rounded-[10px] cursor-pointer relative'>
                    <Link to="">
                        {
                            activePage === "PlayGame"
                            ?
                            <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"
                                className="text-[#1b74e4]  x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt x1fgtraw xgd8bvy">
                                <g fill-rule="evenodd" transform="translate(-444 -156)">
                                    <path
                                        d="M462.75 168a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-3 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-7-2h-1.25v1.25a.75.75 0 0 1-1.5 0V169h-1.25a.75.75 0 0 1 0-1.5H450v-1.25a.75.75 0 0 1 1.5 0v1.25h1.25a.75.75 0 0 1 0 1.5m8.25-8h-10c-3.86 0-7 3.14-7 7s3.14 7 7 7h10c3.86 0 7-3.14 7-7s-3.14-7-7-7">
                                    </path>
                                </g>
                            </svg>
                            :
                            <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"
                                className="text-[#65676b] x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1fgtraw xgd8bvy ">
                                <g fill-rule="evenodd" transform="translate(-444 -204)">
                                    <g>
                                        <path fill-rule="nonzero"
                                            d="M98.5 5.75v4a.75.75 0 1 0 1.5 0v-4a.75.75 0 1 0-1.5 0z"
                                            transform="translate(351.5 208.5)"></path>
                                        <path fill-rule="nonzero"
                                            d="M97.25 8.5h4a.75.75 0 1 0 0-1.5h-4a.75.75 0 1 0 0 1.5z"
                                            transform="translate(351.5 208.5)"></path>
                                        <path fill-rule="nonzero"
                                            d="M109.5 14.5h-10a7 7 0 0 1 0-14h10a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 0 0 0-11h-10a5.5 5.5 0 0 0 0 11h10z"
                                            transform="translate(351.5 208.5)"></path>
                                        <path
                                            d="M109 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3-3a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
                                            transform="translate(351.5 208.5)"></path>
                                    </g>
                                </g>
                            </svg>

                        }
                         {
                        activePage === "PlayGame" &&  <hr className='absolute h-[3px] w-full bottom-0 left-0 bg-[#1b74e4] ' ></hr>
                       }
                   
                       
                    </Link>
                </li>
            </ul>
        </div>
        <div className='flex'>
            <ul className='flex'>
                <Space>
                    <Popover content={ <Menu />} trigger="click">
                        <li className='flex w-[40px] h-[40px] rounded-[50%] justify-center items-center mx-[5px] cursor-pointer relative bg-[#e4e6eb] hover:bg-[#d8dadf]'
                        title="Menu" onClick={()=>setActivePage("Menu")}>
                            <Link to="/">
                            {
                            activePage === "Menu"
                            ?
                            <svg fill="currentColor" viewBox="0 0 44 44" width="1em" height="1em"
                                className="text-[#1b74e4] x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo">
                                <circle cx="7" cy="7" r="6"></circle>
                                <circle cx="22" cy="7" r="6"></circle>
                                <circle cx="37" cy="7" r="6"></circle>
                                <circle cx="7" cy="22" r="6"></circle>
                                <circle cx="22" cy="22" r="6"></circle>
                                <circle cx="37" cy="22" r="6"></circle>
                                <circle cx="7" cy="37" r="6"></circle>
                                <circle cx="22" cy="37" r="6"></circle>
                                <circle cx="37" cy="37" r="6"></circle>
                            </svg>
                            :
                            <svg fill="currentColor" viewBox="0 0 44 44" width="1em" height="1em"
                                className=" text-black x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo">
                                <circle cx="7" cy="7" r="6"></circle>
                                <circle cx="22" cy="7" r="6"></circle>
                                <circle cx="37" cy="7" r="6"></circle>
                                <circle cx="7" cy="22" r="6"></circle>
                                <circle cx="22" cy="22" r="6"></circle>
                                <circle cx="37" cy="22" r="6"></circle>
                                <circle cx="7" cy="37" r="6"></circle>
                                <circle cx="22" cy="37" r="6"></circle>
                                <circle cx="37" cy="37" r="6"></circle>
                            </svg>
                            }
                            </Link>
                        </li>
                    </Popover>
                </Space>
                <Space>
                    <Popover content={<Messenger />} trigger="click">
                        <li onClick={()=>setActivePage("Mess")}
                        className='bg-[#e4e6eb] flex justify-center items-center w-[40px] h-[40px] rounded-[50%] relative mx-[5px] cursor-pointer hover:bg-[#d8dadf]'>
                            <Link to="/">
                                {
                                    activePage === "Mess"
                                    ?
                                    <svg viewBox="0 0 28 28"
                                        className="text-[#1b74e4] x1lliihq x1k90msu x2h7rmj x1qfuztq x1qq9wsj"
                                        fill="currentColor" height="20" width="20">
                                        <path
                                            d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z">
                                        </path>
                                    </svg>
                                    :
                                    <svg viewBox="0 0 28 28"
                                        className="text-black x1lliihq x1k90msu x2h7rmj x1qfuztq x1qq9wsj"
                                        fill="currentColor" height="20" width="20">
                                        <path
                                            d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z">
                                        </path>
                                    </svg>
                                }
                            </Link>
                        </li>
                    </Popover>
                </Space>
                <Space>
                    <Popover content={<Notification />} trigger="click">
                        <li onClick={() => {setActivePage("Notifi")}}
                            className='bg-[#e4e6eb] hover:bg-[#d8dadf] flex justify-center items-center w-[40px] h-[40px] rounded-[50%] mx-[5px] cursor-pointer'>
                                <Link to="/">
                                    {
                                        activePage === "Notifi"
                                        ?
                                        <svg viewBox="0 0 28 28" className="text-[#1b74e4] rounded-[50%] x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
                                            fill="currentColor" height="20" width="20">
                                            <path
                                                d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z">
                                            </path>
                                        </svg>
                                        :
                                        <svg viewBox="0 0 28 28" className="text-black x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
                                            fill="currentColor" height="20" width="20">
                                            <path
                                                d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z">
                                            </path>
                                        </svg>
                                    }
                                </Link>
                           
                        </li>
                    </Popover>
                </Space>
                <Space>
                    <Popover content={<Acc/>} trigger="click">
                        <li className='w-[50px] mx-[5px] cursor-pointer'>
                            <div className='w-[40px]'>
                                <img className='w-[40px] rounded-[50%]'
                                    src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/351469982_1435353713673053_2527717267963048920_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kWp4CsLK2EAAX8hcZ50&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAK-DuhyQ-V_3VH_NZsrD7LsIgGWbvy0zj93aHBq-x2hg&oe=64F059EF"
                                    alt="" />
                            </div>
                        </li>
                    </Popover>
                </Space>
            </ul>
        </div>
    </header>
    <div>
        <Suspense fallback={<Spin size="large" className='w-full h-[80vh] flex items-center justify-center  ' />} >
        {children}
        </Suspense>
    </div>
</div>
)
}
export default Header