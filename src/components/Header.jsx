import React, { useState } from "react";

export default function Header() {
  return (
    <header className="flex h-24 px-10 gap-6 w-full justify-left items-center bg-white">
      <img src="../img/logo.svg" alt="logo" />
      <h2 className="h-auto text-2xl font-semibold text-gray-700">Weather Dashboard</h2>
    </header>
  ) }