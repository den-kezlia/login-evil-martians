'use client'

import Header from "@/app/components/header"
import Card from "@/app/components/card"
import CardTitle from "@/app/components/card-title"
import Login from "@/app/components/login"

import styles from "./page.module.css"

export default function Home() {
    return (
      <main className={styles.main}>
          <div className={styles.window}>
              <Header title="Login to Evil Martians team" icon="assets/win95-logo.png" />

              <Card>
                  <CardTitle title="Welcome to not existing website" />
                  <Login />
              </Card>
          </div>
        </main>
    )
}
