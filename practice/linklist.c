 #include <stdio.h>
#include <stdlib.h>
struct node{
    int info;
    struct node *link;    
};
struct node *first = NULL;
void create();
void insert();
void delete();
void traversal();

int main() { 
    int ch;
    while(1)
    {
    printf("1 for creation of linear linked list\n");
    printf("2 for insertion of element in linked list\n");
    printf("3 for deletion of element in linked list\n");
    printf("4 for traversal of linked list\n");
    printf("5 for exit\n");
    printf("enter your choice");
    scanf("%d", &ch);
    switch(ch) {
        case 1:
            create();
            break;
        case 2:
            insert();
            break;
        case 3:
            delete();
            break;
        case 4:
            traversal();
            break;
        case 5:
            exit(0);
        default:
            printf("wrong choice\n");
            return 1;
    }
}
}
void create(){
    struct node *ptr, *cpt;
    char ch;
    ptr = (struct node*) malloc(sizeof(struct node));
    printf("Enter the data for new node\n");
    scanf("%d", &ptr->info);
      first = ptr;              
    do{
        cpt=(struct node*) malloc(sizeof(struct node));
        printf("Enter the data for new node\n");
        scanf("%d", &cpt->info);
        ptr->link=cpt;
        ptr=cpt;
        printf("do you want more node press y/n");
        ch = getchar();
    }
    while(ch=='y');
    }
void traversal()
{
     struct node *ptr = first;
     if (ptr == NULL) {
        printf("The list is empty.\n");
        return;
    }
    while (ptr != NULL) {
        printf("%d -> ", ptr->info);
        ptr = ptr->link;
    }
}
void insert(){
    struct node *ptr;
    ptr=(struct node*)malloc(sizeof(struct node));
    if(ptr==NULL) {
        printf("overflow");
}
    else {printf("enter the new record");
    scanf("%d",&ptr->info);
    ptr->link=first;
    first=ptr;
}
}
void delete()
{
    int data;
    struct node*ptr,*cpt;
    if(first==NULL){
        printf("underflow");
    }
    printf("Enter the data to be deleted:");
    scanf("%d",&data);
    if(ptr->info!=data){
        cpt=ptr;
        ptr=ptr->link;
    }
    else{
        cpt->link=ptr->link;
        free(ptr);
    }
}
