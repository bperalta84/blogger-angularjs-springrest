package com.bperalta.simpleblog.data.dao;

import java.util.List;

/**
 * @author barryperalta
 *
 * @param <E>
 * @param <I>
 */
public interface BaseDao<E, I> {
   public void save(E e);
   public void update(E e);
   public void delete(E e);
   public E find(I i);
   public List<E> list();
   
}
