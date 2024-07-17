import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', inputValue);
    setInputValue('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Your App</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter something..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;