class FilaCircular {
    #inicio;
    #fim;
    #qtd;
    #elementos;

    constructor(tamanho = 10) {
        this.#inicio = 0;
        this.#fim = -1;
        this.#qtd = 0;
        this.#elementos = new Array(tamanho);
    }

    isFull() {
        return this.#qtd === this.#elementos.length;
    }

    isEmpty() {
        return this.#qtd === 0;
    }

    enqueue(dado) {
        if (!this.isFull()) {
            this.#fim = (this.#fim + 1) % this.#elementos.length;
            this.#elementos[this.#fim] = dado;
            this.#qtd++;
            return true;
        }
        return false;
    }

    dequeue() {
        if (!this.isEmpty()) {
            const dado = this.#elementos[this.#inicio];
            this.#inicio = (this.#inicio + 1) % this.#elementos.length;
            this.#qtd--;
            return dado;
        }
        return null;
    }

    [Symbol.iterator]() {
        let i = this.#inicio;
        let qtd = this.#qtd;
        let cont = 0;
        const elementos = this.#elementos;
        return {
            next: () => {
                if (cont < qtd) {
                    const valor = elementos[i];
                    i = (i + 1) % elementos.length;
                    cont++;
                    return { value: valor, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}