"use client"

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const HomePageInfo = () => {
    const router = useRouter();
    const pathname = usePathname()

    const handleTransfer = () => {
        const href="/transfer"
        router.push(href);
    };
    
    
    
    const handleP2PTransactions = () => {
        const href="/transactions"
        
        
        router.push(href);
    };

    const handleTransferToWallet = () => {
        const href="/p2p"
        
        
        router.push(href);
    };

    return (
        <div className="p-8 bg-white shadow-md rounded-lg pt-10 mt-10 mr-10">
            <h1 className="text-3xl font-bold mb-4">Welcome to Paytm Wallet</h1>
            <p className="text-lg mb-4">Your all-in-one wallet app to manage your finances with ease.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Bank to Wallet</h2>
                    <p className="text-gray-700">Easily transfer funds from your bank account to your Paytm Wallet. Manage your money seamlessly and use it for a variety of transactions.</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Send to Others</h2>
                    <p className="text-gray-700">Send money from your Paytm Wallet to friends and family using their phone numbers. Quick and hassle-free transfers with just a few taps.</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">P2P Transactions</h2>
                    <p className="text-gray-700">Keep track of all your peer-to-peer transactions. View your transaction history and manage your finances effectively.</p>
                </div>
            </div>

            <div className="flex justify-around">
                <button
                    onClick={handleTransfer}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Transfer to wallet
                </button>
                
                <button
                    onClick={handleTransferToWallet}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send money to friend
                </button>
                <button
                    onClick={handleP2PTransactions}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    P2P Transactions
                </button>
            </div>
        </div>
    );
};

export default HomePageInfo;
