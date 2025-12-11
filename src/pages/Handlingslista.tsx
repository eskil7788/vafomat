import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, ShoppingCart } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
const Handlingslista = () => {
  const [items, setItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('vafomat-shopping-list');
    return saved ? JSON.parse(saved) : [];
  });
  const [newItem, setNewItem] = useState('');
  useEffect(() => {
    localStorage.setItem('vafomat-shopping-list', JSON.stringify(items));
  }, [items]);
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems(prev => [...prev, newItem.trim()]);
      setNewItem('');
    }
  };
  const handleRemoveItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };
  const handleClearAll = () => {
    setItems([]);
  };
  return <PageLayout>
      <div className="container py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skriv din inköpslista här</h1>
            
          </div>

          {/* Receipt-style list */}
          <div className="receipt-paper rounded-lg overflow-hidden mb-6">
            {/* Receipt header */}
            <div className="border-b-2 border-dashed border-foreground/20 p-4 text-center">
              <h2 className="font-receipt text-lg font-bold text-foreground">HANDLINGSLISTA</h2>
              <p className="font-receipt text-xs text-muted-foreground mt-1">
                {new Date().toLocaleDateString('sv-SE')}
              </p>
            </div>

            {/* Receipt items */}
            <div className="p-4 min-h-[200px]">
              {items.length === 0 ? <p className="font-receipt text-center text-muted-foreground py-8">
                  Din lista är tom
                </p> : <ul className="space-y-2">
                  {items.map((item, index) => <li key={index} className="font-receipt flex items-center justify-between group">
                      <span className="text-foreground">
                        {index + 1}. {item}
                      </span>
                      <button onClick={() => handleRemoveItem(index)} className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all">
                        ×
                      </button>
                    </li>)}
                </ul>}
            </div>

            {/* Receipt footer with torn edge */}
            {items.length > 0 && <div className="border-t-2 border-dashed border-foreground/20 p-4 text-center">
                <p className="font-receipt text-sm text-muted-foreground">
                  Totalt: {items.length} {items.length === 1 ? 'vara' : 'varor'}
                </p>
              </div>}
            
            <div className="receipt-tear h-3" />
          </div>

          {/* Add item form */}
          <form onSubmit={handleAddItem} className="flex gap-2 mb-4">
            <Input type="text" placeholder="Lägg till vara..." value={newItem} onChange={e => setNewItem(e.target.value)} className="font-receipt" />
            <Button type="submit" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </form>

          {/* Clear all button */}
          {items.length > 0 && <Button variant="outline" onClick={handleClearAll} className="w-full gap-2">
              <Trash2 className="w-4 h-4" />
              Rensa listan
            </Button>}
        </div>
      </div>
    </PageLayout>;
};
export default Handlingslista;