import { getServerSession } from "next-auth";
import { P2pTransaction } from "../../../components/P2pTransaction";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getSendData() {
    const session = await getServerSession(authOptions);
    const transactions = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
                { fromUserId: Number(session?.user?.id) },
            ],
        },
    });
    return transactions.map(t => ({
        id: t.id,
        timestamp: t.timestamp,
        fromUserId: t.fromUserId,
        toUserId: t.toUserId,
        amount: t.amount,
    }))
}

async function getReceiveData() {
    const session = await getServerSession(authOptions);
    const transactions = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
                { toUserId: Number(session?.user?.id) },
            ],
        },
    });
    return transactions.map(t => ({
        id: t.id,
        timestamp: t.timestamp,
        fromUserId: t.fromUserId,
        toUserId: t.toUserId,
        amount: t.amount,
    }))
}

export default async function P2pTransactionsPage() {
    const SendData = await getSendData();
    const ReceiveData = await getReceiveData();

    return (
        <div className="w-full px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <P2pTransaction name="send" transactions={SendData} />
                <P2pTransaction name="receive" transactions={ReceiveData} />
            </div>
        </div>
    );
}
