import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import { useAxios } from "./axios";
import { NextAuthOptions } from "next-auth";

export const AuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const response = await useAxios.post('/auth/signin', {
                        username: credentials?.username,
                        password: credentials?.password
                    })
                    if ( response.data?.user ) {
                        return response.data?.user
                    } else {
                        return null
                    }
                } catch(e) {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    pages: {
        signIn: '/signin',
        newUser: '/signup'
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if ( user ) {
                token.name = user.name
                token.email = user.email
                token.picture = user.image
            }
            return token
        },
        async session({ session, user }) {
            if ( user ) {
                session.user = user
            }
            return session
        }
    }
}