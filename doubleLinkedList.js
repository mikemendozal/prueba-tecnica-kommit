class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    insertHead(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    }

    insertTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
        this.length++;
      }

  
    remove(data) {
      if (!this.head) return;
  
      let current = this.head;
      while (current) {
        if (current.data === data) {
          if (current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
          } else if (current === this.head) {
            this.head = this.head.next;
            this.head.prev = null;
          } else if (current === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          this.length--;
          return;
        }
        current = current.next;
      }
    }


    search(data) {
      let current = this.head;

      while (current) {
        if (current.data === data) {
          
          return current.data;
        }
      
        current = current.next;
        
      }
      return null;
    }

    size(){
        return this.length;
    }
  
    printList() {
      let current = this.head;
      const list = [];
      while (current) {
        list.push(current.data);
        current = current.next;
      }
      console.log(list.join(' <-> '));
    }
  }
  
  // Example Test
  const dll = new DoublyLinkedList();
  dll.insertHead(10);
  dll.insertTail(20);
  dll.insertHead(5);
  dll.insertHead(8);

  if (dll.search(20)) {
    console.log(dll.search(20));
  }else{
    console.log('elemento no encontrado');
  }

  dll.insertTail(30);
  console.log('el tamaño de la lista es:'+dll.size());
  dll.printList();
   
  