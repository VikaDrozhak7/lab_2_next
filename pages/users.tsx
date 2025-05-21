import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const fetchUsers = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        });
        if (res.ok) {
            setName("");
            setEmail("");
            fetchUsers();
        }
    };

    const handleDelete = async (id: number) => {
        const res = await fetch(`/api/users/${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            fetchUsers();
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <main style={{ padding: "2rem" }}>
            <h1>Користувачі</h1>

            <form onSubmit={handleAdd} style={{ marginBottom: "1rem" }}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Імʼя"
                    required
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    required
                />
                <button type="submit">Додати</button>
            </form>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email}){" "}
                        <button onClick={() => handleDelete(user.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
