#include<iostream>
#define out cout<<
#define in cin>>
using namespace std;

int arrkey(int arr[], int n, int key){

    for(int i=0; i<n; i++){
        if(arr[i]==key){
            return i;
        }
    }
    return -1;
}

int main()
{
    int n;
    cin>>n;

    int arr[n];
    
    for(int i=0;i<n;i++){
        cin>>arr[i]; //Takes input of array according to its size for array place 
    }

    int key;
    cin>>key; //What value to be find 

    cout<<arrkey(arr, n, key)<<endl;

    return 0;
}