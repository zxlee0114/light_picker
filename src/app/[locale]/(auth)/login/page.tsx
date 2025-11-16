import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInTab from "./_components/SignInTab";
import SignUpTab from "./_components/SignUpTab";

const LoginPage = () => {
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
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginPage;
