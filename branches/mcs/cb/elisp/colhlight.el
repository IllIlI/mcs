
  "Defines a function to locate a character in column COL. Returns the function symbol, named `column-marker-move-to-COL'."
  (let ((fn-symb  (intern (format "column-marker-move-to-%d" col))))
    (fset `,fn-symb
          `(lambda (end)
             (let ((start (point)))
               (when (> end (point-max)) (setq end (point-max)))
           (message "this -> %d" (point-max))

               ;; Try to keep `move-to-column' from going backward, though it still can.
               (unless (< (current-column) ,col) (forward-line 1))

               ;; Again, don't go backward.  Try to move to correct column.
               (when (< (current-column) ,col) (move-to-column ,col))

               ;; If not at target column, try to move to it.
               (while (and (< (current-column) ,col) (< (point) end)
                           (= 0 (+ (forward-line 1) (current-column)))) ; Should be bol.
                 (move-to-column ,col))

               ;; If at target column, not past end, and not prior to start,
               ;; then set match data and return t.  Otherwise go to start
               ;; and return nil.
               (if (and (<= ,col (current-column)) (<= (point) end) (> (point) start) )
                   (progn (set-match-data (list (1- (point)) (point)))
                          t)            ; Return t.
         (message "column %d" (current-column))
                 (goto-char start)
                 nil)))) ; Return nil.
    fn-symb)
  )


(defun column-marker-internal (sym col &optional face)
  "SYM is the symbol for holding the column marker context. COL is the column in which a marker should be set. Supplying nil or 0 for COL turns off the marker. FACE is the face to use.  If nil, then face `column-marker-1' is used."
  (when col                             ; Generate a new column marker
    (set sym `((,(column-marker-find col) (0 ',face prepend t))))
    (font-lock-add-keywords nil (symbol-value sym) t)
    )
  (font-lock-fontify-buffer)
