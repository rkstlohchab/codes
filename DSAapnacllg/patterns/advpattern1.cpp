#include<iostream>
using namespace std;

int main()
{
    int n,count;
    cin>>n;

    for(int i=1;i<=n;i++){
        count = (n + 1) - i;
        for(int j=1; j<=count;j++){
            cout<<j;
        }cout<<endl;

    };


    return 0;
}