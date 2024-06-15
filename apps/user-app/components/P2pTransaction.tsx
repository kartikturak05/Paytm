import { Card } from "@repo/ui/card";

export const P2pTransaction = ({
    name,
    transactions
}: {
    name: string,
    transactions: {
        id: Number,
        timestamp: Date,
        fromUserId: Number,
        toUserId: Number,
        amount: Number
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transaction">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title={name}>
        <div className="pt-2 border border-gray-300 rounded h-64 overflow-y-auto">
            {transactions.map(t => (
                <div  className="flex justify-between border-b border-gray-300 p-2">
                    <div>
                        <div className="text-sm">
                            {name} INR
                        </div>
                        <div className="text-slate-600 text-xs">
                            {t.timestamp.toDateString()}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center pl-10">
                        {name === "send" ? "+" : "-"} Rs {Number(t.amount) / 100}
                    </div>
                </div>
            ))}
        </div>
    </Card>
}
