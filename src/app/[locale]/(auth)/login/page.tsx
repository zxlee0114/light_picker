"use client";

import { useEffect } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";

import SignInTab from "./_components/SignInTab";
import SignUpTab from "./_components/SignUpTab";
import SocialAuthButtons from "./_components/SocialAuthButtons";

const LoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    authClient.getSession().then(session => {
      if (session.data !== null) router.push(ROUTES.HOME);
    });
  }, [router]);

  return (
    <Tabs defaultValue="signin" className="mx-auto max-w-fit my-6 px-4">
      <TabsList>
        <TabsTrigger value="signin">登入</TabsTrigger>
        <TabsTrigger value="signup">註冊</TabsTrigger>
      </TabsList>

      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle className="text-l-bold">登入</CardTitle>
          </CardHeader>

          <CardContent>
            <SignInTab />
          </CardContent>

          <Separator />

          <CardFooter className="grid grid-cols-2 gap-3 p-6">
            <SocialAuthButtons />
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle className="text-l-bold">註冊</CardTitle>
          </CardHeader>

          <CardContent>
            <SignUpTab />
          </CardContent>

          <Separator />

          <CardFooter className="grid grid-cols-2 gap-3">
            <SocialAuthButtons />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginPage;
