import Link from "next/link";

export default function Home() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Лабораторна №2</h1>
            <p>Вітаю у проєкті! </p>
            <Link href="/users">Перейти до користувачів</Link>
        </main>
    );
}
